export class Foo {

    constructor() {
        this.message = 'constructed';
    }

    activate(context) {
        this.message = 'activate:' + context.message;
    }

    attached() {
        this.message = 'attached';
    }
}
