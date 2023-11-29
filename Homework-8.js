const prompt = require('prompt-sync')()
console.log('Вводити латиницею');
const userName = prompt('Введіть імя   ');
const userEmail = prompt('Введіть емайл   ');
const userPhone = prompt('Введіть номер телефону   ');

const person = {
    name: userName,
    email: userEmail,
    phone: userPhone,
}

console.log(person)

console.log('Виберіть бажане (вибрати клавішею латиницею!)');
console.log('\nФіладельфія -> F\nКаліфорнія -> K\nДракон -> D\n');
const menuUser1 = prompt('> ')


if(menuUser1 == 'F' || menuUser1 == 'f'){
const sushione = {
    title: 'Філадельфія',
    price: 110000/100,
    category: 'Класика',
}
console.log(sushione)
} else if(menuUser1 == 'K' || menuUser1 == 'k'){
const sushitwo = {
    title: 'Каліфорнія',
    price: 250000/100,
    category: 'Класика',
}
console.log(sushitwo)
} else if(menuUser1 == 'S' || menuUser1 == 's'){
const sushithree = {
    title: 'Дракон',
    price: 320000/100,
    category: 'Гострі',
} 
console.log(sushithree)
} 

else {
    console.log("Помилка: Невірний вибір.")
    return
}

console.log("Веддіть адресу доставки товару (вводити латиницею)")
const userDelivery1 = prompt()

const userDelivery = {
    status: 'pending',
    setStatus: function (newStatus) {
        this.status = newStatus;
    }
};

userDelivery.setStatus('process');
console.log(userDelivery.status);
