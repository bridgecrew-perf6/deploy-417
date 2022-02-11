'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert('Profils', [
            {
                name: 'Полина',
                user_id: '1',
                description: 'Люблю читать книги и чинить телефоны',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Егор',
                user_id: '2',
                description: 'Люблю играть на гитаре',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Марсель',
                user_id: '3',
                description: 'Люблю петь и придумывать тосты',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Юрий',
                user_id: '4',
                description: 'Люблю показывать фокусы',
                img: 'blob:https://web.telegram.org/556a85f2-8d4e-4a00-bd24-1395aee514ce',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Антон',
                user_id: '5',
                description: 'Люблю помогать людям бескорыстно, могу переустановить винду',
                img: 'https://ca.slack-edge.com/T02NH8VRBAS-U02P66FU54H-8e28b2da15dc-512',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Геннадий',
                user_id: '6',
                description: 'Описание: За тепло в Вашем доме!',
                img: 'http://filurin.ru/wp-content/uploads/2015/09/4sokol.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Феликс',
                user_id: '7',
                description: 'Даю свое тепло, чиню разбитые сердечки',
                img: 'https://pbs.twimg.com/media/CaNONveWQAAtP0o.jpg:large',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Марат Прохоров',
                user_id: '8',
                description: 'Ремонт батарей, в доме чисто в два раза быстрей!',
                img: 'file:///home/user/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/s-bbe331b52a73838d1c074a2337aa38b289b388f0.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
