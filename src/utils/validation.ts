export const validation = (scope: HTMLElement | null): void => {
console.log('start validation!')
    const password = scope?.querySelector('input[type="password"]');
    const email = scope?.querySelector('input[type="email"]');
    const phone = scope?.querySelector('input[type="phone"]');
    const word = scope?.querySelector('input[type="text"]');
    const message = scope?.querySelector('#message-input');

    function CheckPassword(value: string): void {
        const passw = /^[A-Za-z]\w{7,14}$/;
        if (!value.toLowerCase().match(passw)) {
            alert('Incorrect pass!')
            return;
        }
    }

    function CheckEmail(value: string): void {
        const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;
        if (!value.toLowerCase().match(email)) {
            alert('Wrong email!')
            return;
        }
    }

    function CheckPhone(value: string): void {
        const phone = /^(\+?7|8)?9\d{9}$/;
        if (!value.toLowerCase().match(phone)) {
            alert('Wrong phone!')
            return;
        }
    }

    function CheckWords(value: string): void {
        const words = new RegExp('fuck');
        if (value.toLowerCase().match(words) || value.length < 3) {
            alert('Edit please!')
            return;
        }
    }

    password?.addEventListener('blur', (event) => {
        CheckPassword(event?.target?.value);
    });
    password?.removeEventListener('blur', (event) => {
        CheckPassword(event?.target?.value);
    });

    email?.addEventListener('blur', (event) => {
        CheckEmail(event?.target?.value);
    });

    email?.removeEventListener('blur', (event) => {
        CheckEmail(event?.target?.value);
    });

    phone?.addEventListener('blur', (event) => {
        CheckPhone(event?.target?.value);
    });

    phone?.removeEventListener('blur', (event) => {
        CheckPhone(event?.target?.value);
    });

    word?.addEventListener('blur', (event) => {
        console.log(event)
        CheckWords(event?.target?.value);
    });

    word?.removeEventListener('blur', (event) => {
        console.log(event)
        CheckWords(event?.target?.value);
    });

    message?.addEventListener('blur', (event) => {
        CheckWords(event?.target?.value);
    });

    message?.removeEventListener('blur', (event) => {
        CheckWords(event?.target?.value);
    });
}