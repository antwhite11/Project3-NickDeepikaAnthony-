'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [{
      productName: "Id Lanyard Card Case",
      description: "Keep an ID or train pass easily seen and your cards safely tucked away with this organized lanyard. Crafted of refined leather and our Signature canvas, wear it around your neck with the strap to go hands-free or tuck it into your bag.",
      price: 95.0,
      catogery: "Bags",
      imageURL: "https://voyagergames.s3.amazonaws.com/Id+Lanyard+Card+Case.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: "Courier Carryall In Colorblock",
      description: "Based on a beloved Coach silhouette from 1972, this equestrian-inspired carryall is crafted of our Signature canvas and colorblock glovetanned leather with genuine snakeskin trim.",
      price: 675.0,
      catogery: "Bags",
      imageURL: "https://voyagergames.s3.amazonaws.com/Handbag.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
     {
      productName: "Jordan Zoom Trunner Ultimate",
      description: "The Jordan Zoom Trunner Ultimate is made for athletes who want a shoe they can run or train in. Breathable and ultralight, it features full-length cushioning and an extra forefoot.",
      price: 59.99,
      catogery: "Shoes",
      imageURL: "https://voyagergames.s3.amazonaws.com/Shoe+2.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: "Signature Chambray Ribbed Blouson",
      description: "Do denim differently with this rugged military-inspired blouson updated in our lightweight Signature chambray. Designed with a classic fit, it’s finished with leather accents at the zip",
      price: 595.00,
      catogery: "Clothing",
      imageURL: "https://voyagergames.s3.amazonaws.com/Signature+Chambray+Ribbed+Blouson.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: "Nike Blazer Mid '77 Vintage",
      description: "The Nike Blazer Mid '77 Vintage harnesses the old-school look of Nike basketball with a vintage midsole finish, making it look like you've been saving them for years.",
      price: 100.00,
      catogery: "Shoes",
      imageURL: "https://voyagergames.s3.amazonaws.com/Shoe+3.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: "Horse And Carriage Tape T-Shirt",
      description: "Kick back with this sporty T-shirt inspired by retro soccer gear. Crafted of soft cotton, it’s finished with contrast twill taping featuring our iconic Horse and Carriage motif.",
      price: 95.00,
      catogery: "Clothing",
      imageURL: "https://voyagergames.s3.amazonaws.com/Tape+T-Shirt.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: "Cross body Bag",
      description: "Based on a Coach favorite introduced in the 1970s, the Riley is a slender design perfect for nights out and days on the go. Crafted of our buttery soft glovetanned leather, the organized",
      price: 450.00,
      catogery: "Bags",
      imageURL: "https://voyagergames.s3.amazonaws.com/Turnlock+Saddle+Crossbody.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: "Nike Air Force 1 '07 LV8",
      description: "The Nike Air Force 1 ’07 LV8 puts a fresh spin on the basketball OG with crisp leather, bold colors and the perfect amount of flash. Featuring the Nike Worldwide graphics throughout.",
      price: 450.00,
      catogery: "Bags",
      imageURL: "https://voyagergames.s3.amazonaws.com/Adidas+Shoes.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
