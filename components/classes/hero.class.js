class Hero extends MovableObject {

    constructor () {
        super();
        super().loadImage('/assets/img/1.Sharkie/3.Swim/1.png');
    }

    jump () {
        return true
    }
}