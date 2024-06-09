class Facility {
    constructor(id, name, image, player = null) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.player = player;
    }
}

const mainFacilities = [
    new Facility(1, '화로','/images/mainfacility/brazier2.png'),
    new Facility(2, '화로','/images/mainfacility/brazier3.png'),
    new Facility(3, '화덕','/images/mainfacility/fire_pit4.png'),
    new Facility(4, '화덕','/images/mainfacility/fire_pit5.png'),
    new Facility(5, '흙가마','/images/mainfacility/dirt_kiln.png'),
    new Facility(6, '돌가마','/images/mainfacility/stone_kiln.png'),
    new Facility(7, '가구 제작소','/images/mainfacility/furniture_factory.png'),
    new Facility(8, '그릇 제작소','/images/mainfacility/bowl_factory.png'),
    new Facility(9, '바구니 제작소','/images/mainfacility/basket_factory.png'),
    new Facility(10, '우물','/images/mainfacility/well.png'),
];

const subFacilities = [
    new Facility()
];

export {mainFacilities, subFacilities };