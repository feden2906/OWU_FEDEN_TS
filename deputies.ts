enum Gender {
    male = 'male',
    female = 'female',
}

interface IDeputy {
    name: string;
    age: number;
    sex: Gender;
    honestyLevel: number;
    minimumBribe: number;
    bribe: (money: number) => void;
}

interface IConsignment {
    title: string;
    members: Deputy[];
    leader: Deputy;
}

interface ISupremeCouncil {
    consignments: Consignment[];
}

class Deputy implements IDeputy {


    age: number;
    honestyLevel: number;
    minimumBribe: number;
    name: string;
    sex: Gender;

    /*27*/bribe(money: number) {
        let IWantMoney: number = this.minimumBribe * ((100 + this.honestyLevel) / 100)
        let bribe: number = money - (IWantMoney);
        if (money < this.minimumBribe) {
            console.log('Я слуга народа. Я никогда на это не пойду.')
        } else if (money < IWantMoney) {
            console.log('Ну я даже не знаю... Я никогда раньше такого не делал...')
        } else if (bribe >= 0) {
            console.log('Вы обратились куда надо. Я все устрою.')
        }
    }

    constructor(age: number, honestyLevel: number, minimumBribe: number, name: string, sex: Gender) {
        this.age = age;
        this.honestyLevel = honestyLevel;
        this.minimumBribe = minimumBribe;
        this.name = name;
        this.sex = sex;
    }
}

class Consignment implements IConsignment {
    members: Deputy[];
    leader: Deputy;
    title: string;

    /*21*/getConsignment() {
        console.log(this);
    }

    /*22*/addDeputy(deputy:Deputy){
        this.members.push(deputy)
    }
    /*22*/deleteDeputy(index:number){
        this.members.splice(index, 1);
    }
    /*23*/showBribers(){
        for (const i of this.members) {
            if (i.honestyLevel<50){
                console.log(i)
            }
        }
    }
    /*24*/bestBriber(){
        let lvl = (this.members.map((value, index) => value.honestyLevel)).sort()
        for (let member of this.members) {
            if(member.honestyLevel === lvl[0]){
                console.log(member)
                return member
            }
        }
    }
    /*26*/getMembers(){
        console.log(this.members)
    }

    constructor(members: Deputy[], title: string) {
        this.leader = members[0];
        this.members = members;
        this.title = title;
    }
}

class SupremeCouncil implements ISupremeCouncil {
    consignments: Consignment[];
    constructor(consignments: Consignment[]) {
        this.consignments = consignments;
    }

    /*19*/addConsignment(consignment: Consignment) {
        this.consignments.push(consignment);
        console.log(SupremeCouncil);
    }

    /*19*/deleteConsignment(indexOfConsignment: number) {
        this.consignments.splice(indexOfConsignment, 1);
    }

    /*20*/getConsignments() {
        console.log(this.consignments);
    }

    /*25*/bestBriber(){
        let lvl:number[] = []
        this.consignments.map(value =>{
                for (const member of value.members) {
                    lvl.push(member.honestyLevel)
                }
            }
        )
        lvl.sort()
        let bestBriber = this.consignments.map(value => {
            for (const member of value.members) {
                if(member.honestyLevel === lvl[0]){
                    console.log(member)
                }
            }
        })

    }
}

let deputy1 = new Deputy(24, 93, 1500, 'Kostya', Gender.male);
let deputy2 = new Deputy(56, 10, 3000, 'Gleb', Gender.male);
let deputy3 = new Deputy(65, 1, 10000, 'Julia', Gender.female);
let deputy4 = new Deputy(34, 34, 3400, 'Feofan', Gender.male);
let deputy5 = new Deputy(45, 64, 13000, 'Oleg', Gender.male);
let deputy6 = new Deputy(98, 3, 140000, 'Nikita', Gender.male);
let deputy7 = new Deputy(54, 65, 5000, 'Pavel', Gender.male);
let deputy8 = new Deputy(22, 14, 45000, 'Olga', Gender.female);
let deputy9 = new Deputy(67, 35, 10345, 'Katya', Gender.female);
let deputy10 = new Deputy(43, 100, 4500000000, 'Igor', Gender.male);
let deputy11 = new Deputy(26, 100, 1000000000000, 'Vladyslav', Gender.male);
let deputy12 = new Deputy(29, 100, 3400000000, 'Elena', Gender.female);
let deputy13 = new Deputy(47, 56, 12000, 'Dima', Gender.male);
let deputy14 = new Deputy(52, 76, 3401, 'Vasya', Gender.male);
let deputy15 = new Deputy(40, 67, 5400, 'Grisha', Gender.male);

let consignment1 = new Consignment([deputy1, deputy2, deputy3], 'Sovety');
let consignment2 = new Consignment([deputy4, deputy5, deputy6], 'Demokraty');
let consignment3 = new Consignment([deputy7, deputy8, deputy9], 'Konservatory');
let consignment4 = new Consignment([deputy10, deputy11, deputy12], 'Liberasty');
let consignment5 = new Consignment([deputy13, deputy14, deputy15], 'Respublikancy');

let VerhovnaRada = new SupremeCouncil([consignment1, consignment2, consignment3, consignment4, consignment5]);
