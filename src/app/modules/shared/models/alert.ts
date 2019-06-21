export class Alert {
    constructor(
        private visible:boolean, 
        private className:string, 
        private message:string
    ) { }

    show(message:string, className:string, fadeOut:boolean = true, fadeOutTime:number = 3000) {
        this.message = message;
        this.className = className;
        this.visible = true;

        if (fadeOut) setTimeout(() => this.visible = false, fadeOutTime);
    }
    success(message:string, fadeOut:boolean = true, fadeOutTime:number = 3000) {
        this.message = message;
        this.className = 'alert-success';
        this.visible = true;        

        if (fadeOut) setTimeout(() => this.visible = false, fadeOutTime);
    }
    error(message:string, fadeOut:boolean = true, fadeOutTime:number = 3000) {
        this.message = message;
        this.className = 'alert-danger';
        this.visible = true;

        if (fadeOut) setTimeout(() => this.visible = false, fadeOutTime);
    }
    warning(message:string, fadeOut:boolean = true, fadeOutTime:number = 3000) {
        this.message = message;
        this.className = 'alert-warning';
        this.visible = true;

        if (fadeOut) setTimeout(() => this.visible = false, fadeOutTime);
    }
    info(message:string, fadeOut:boolean = true, fadeOutTime:number = 3000) {
        this.message = message;
        this.className = 'alert-info';
        this.visible = true;

        if (fadeOut) setTimeout(() => this.visible = false, fadeOutTime);
    }
    progress() {
        this.message = `<i class="fa fa-spinner fa-spin fa-fw"></i> Sending please wait...`;
        this.className = 'alert-info';
        this.visible = true;
    }
    hide() {
        this.visible = false;
    }
}
