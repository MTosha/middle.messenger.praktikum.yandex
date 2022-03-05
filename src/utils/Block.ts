import EventBus from "./EventBus";
import {nanoid} from "nanoid";

export default class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    public id = nanoid(6);

    private _element: HTMLElement | null = null;
    private _meta: {props: any};

    protected props: any;
    protected children: Record<string, Block>;
    private eventBus: () => EventBus;

    constructor(propsAndChildren: any = {}) {
        const eventBus = new EventBus();

        const {props, children} = this.getChildren(propsAndChildren);

        this.children = children;


        this._meta = {
            props
        };

        this.props = this._makePropsProxy(props);

        this.initChildren();
        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    getChildren(propsAndChildren: any) {
        const children: any = {};
        const props: any = {};

        Object.entries(propsAndChildren).map(([key, value]) => {
            if(value instanceof Block) {
                children[key] = value;

            } else {
                props[key] = value;
            }
        });

        return {props, children};
    }

    protected initChildren() {}

    _registerEvents(eventBus: any) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    init() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidMount() {
        // @ts-ignore
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    componentDidMount(oldProps) {}

    _componentDidUpdate(oldProps: any, newProps: any) {
        if(this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
        }
    }

    componentDidUpdate(oldProps, newProps) {
        return true;
    }

    setProps = (nextProps: any) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    _render() {
        const fragment = this.render();

        const newElement = fragment.firstElementChild as HTMLElement;

        if(this._element) {
            this._removeEvents();
            this._element.replaceWith(newElement);
        }
        this._element = newElement;

        this._addEvents();
    }

    protected render(): DocumentFragment {
        return new DocumentFragment();
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props: any) {
        const self = this;

        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop, value) {
                const oldProps = {...target};
                target[prop] = value;

                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }

    _createDocumentElement(tagName: any) {
        return document.createElement(tagName);
    }

    _removeEvents() {
        const events: Record<string, () => void> = (this.props as any).events;

        if (!events || !this._element) {
            return;
        }


        Object.entries(events).forEach(([event, listener]) => {
            this._element!.removeEventListener(event, listener);
        });
    }

    _addEvents() {
        const events: Record<string, () => void> = (this.props as any).events;

        if (!events) {
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.addEventListener(event, listener);
        });
    }

    // eslint-disable-next-line no-unused-vars
    compile(template: (context: any) => string, context: any) {
        const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

        Object.entries(this.children).forEach(([key, child]) => {
            context[key] = `<div data-id="id-${child.id}"> </div>`
        })
        fragment.innerHTML = template(context);

        Object.entries(this.children).forEach(([, child]) => {

            const stub = fragment.content.querySelector(`[data-id="id-${child.id}"]`)

            if(!stub) {
                return;
            }

            stub.replaceWith(child.getContent()!);
        })
        return fragment.content;
    }


    show() {
        this.getContent()!.style.display = "block";
    }

    hide() {
        this.getContent()!.style.display = "none";
    }
}