const Product = require('./model/product')

class FakeDb {

    constructor(){
        this.products = [
                {
                  image: '../../../assets/img/original-iphone.jpg',
                  name: 'iPhone',
                  price: 1000,
                  description: 'みんなが待っていたiPhone、ついに登場',
                  heading1: 'Heading 1 for Product 1',
                  heading2: 'Heading 2 for Product 1',
                  heading3: 'Heading 3 for Product 1',
                  headingtext1: 'Heading text 1 for Product 1',
                  headingtext2: 'Heading text 2 for Product 1',
                  headingtext3: 'Heading text 3 for Product 1'
                },
                {
                  image: '../../../assets/img/macbookair.jpg',
                  name: 'Mac Book Air',
                  price: 2000,
                  description: '世界最薄のノートブック',
                  heading1: 'Heading 1 for Product 2',
                  heading2: 'Heading 2 for Product 2',
                  heading3: 'Heading 3 for Product 2',
                  headingtext1: 'Heading text 1 for Product 2',
                  headingtext2: 'Heading text 2 for Product 2',
                  headingtext3: 'Heading text 3 for Product 2'
                },
                {
                  image: '../../../assets/img/iPad-10gen-logo-icon.jpg',
                  name: 'iPad',
                  price: 3000,
                  description: '革命的で魔法のようなデバイス。しかも、信じられない価格で。',
                  heading1: 'Heading 1 for Product 3',
                  heading2: 'Heading 2 for Product 3',
                  heading3: 'Heading 3 for Product 3',
                  headingtext1: 'Heading text 1 for Product 3',
                  headingtext2: 'Heading text 2 for Product 3',
                  headingtext3: 'Heading text 3 for Product 3'
                },
                {
                  image: '../../../assets/img/iPodC.jpg',
                  name: 'iPod',
                  price: 4000,
                  description: '1000曲をポケットに。',
                  heading1: 'Heading 1 for Product 4',
                  heading2: 'Heading 2 for Product 4',
                  heading3: 'Heading 3 for Product 4',
                  headingtext1: 'Heading text 1 for Product 4',
                  headingtext2: 'Heading text 2 for Product 4',
                  headingtext3: 'Heading text 3 for Product 4'
                }
            ]
        }

        async initDb(){
          await this.cleanDb()
          this.pushProductsToDb()
        }

        async cleanDb(){
          await Product.deleteMany({})
        }

        pushProductsToDb(){
            this.products.forEach(
                (product) => {
                    const newProduct = new Product(product)
                    newProduct.save()
                }
            )
        }
        seeDb() {
            this.pushProductsToDb()
        }
    }

    module.exports = FakeDb