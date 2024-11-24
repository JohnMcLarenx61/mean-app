const Product = require('./model/product')

class FakeDb {

    constructor(){
        this.products = [
                {
                  image: 'path/to/image1.jpg',
                  name: 'Product 1',
                  price: 1000,
                  description: 'Product 1 description',
                  heading1: 'Heading 1 for Product 1',
                  heading2: 'Heading 2 for Product 1',
                  heading3: 'Heading 3 for Product 1',
                  headingtext1: 'Heading text 1 for Product 1',
                  headingtext2: 'Heading text 2 for Product 1',
                  headingtext3: 'Heading text 3 for Product 1'
                },
                {
                  image: 'path/to/image2.jpg',
                  name: 'Product 2',
                  price: 2000,
                  description: 'Product 2 description',
                  heading1: 'Heading 1 for Product 2',
                  heading2: 'Heading 2 for Product 2',
                  heading3: 'Heading 3 for Product 2',
                  headingtext1: 'Heading text 1 for Product 2',
                  headingtext2: 'Heading text 2 for Product 2',
                  headingtext3: 'Heading text 3 for Product 2'
                },
                {
                  image: 'path/to/image3.jpg',
                  name: 'Product 3',
                  price: 3000,
                  description: 'Product 3 description',
                  heading1: 'Heading 1 for Product 3',
                  heading2: 'Heading 2 for Product 3',
                  heading3: 'Heading 3 for Product 3',
                  headingtext1: 'Heading text 1 for Product 3',
                  headingtext2: 'Heading text 2 for Product 3',
                  headingtext3: 'Heading text 3 for Product 3'
                },
                {
                  image: 'path/to/image4.jpg',
                  name: 'Product 4',
                  price: 4000,
                  description: 'Product 4 description',
                  heading1: 'Heading 1 for Product 4',
                  heading2: 'Heading 2 for Product 4',
                  heading3: 'Heading 3 for Product 4',
                  headingtext1: 'Heading text 1 for Product 4',
                  headingtext2: 'Heading text 2 for Product 4',
                  headingtext3: 'Heading text 3 for Product 4'
                },
                {
                  image: 'path/to/image5.jpg',
                  name: 'Product 5',
                  price: 5000,
                  description: 'Product 5 description',
                  heading1: 'Heading 1 for Product 5',
                  heading2: 'Heading 2 for Product 5',
                  heading3: 'Heading 3 for Product 5',
                  headingtext1: 'Heading text 1 for Product 5',
                  headingtext2: 'Heading text 2 for Product 5',
                  headingtext3: 'Heading text 3 for Product 5'
                },
                {
                  image: 'path/to/image6.jpg',
                  name: 'Product 6',
                  price: 6000,
                  description: 'Product 6 description',
                  heading1: 'Heading 1 for Product 6',
                  heading2: 'Heading 2 for Product 6',
                  heading3: 'Heading 3 for Product 6',
                  headingtext1: 'Heading text 1 for Product 6',
                  headingtext2: 'Heading text 2 for Product 6',
                  headingtext3: 'Heading text 3 for Product 6'
                },
                {
                  image: 'path/to/image7.jpg',
                  name: 'Product 7',
                  price: 7000,
                  description: 'Product 7 description',
                  heading1: 'Heading 1 for Product 7',
                  heading2: 'Heading 2 for Product 7',
                  heading3: 'Heading 3 for Product 7',
                  headingtext1: 'Heading text 1 for Product 7',
                  headingtext2: 'Heading text 2 for Product 7',
                  headingtext3: 'Heading text 3 for Product 7'
                },
                {
                  image: 'path/to/image8.jpg',
                  name: 'Product 8',
                  price: 8000,
                  description: 'Product 8 description',
                  heading1: 'Heading 1 for Product 8',
                  heading2: 'Heading 2 for Product 8',
                  heading3: 'Heading 3 for Product 8',
                  headingtext1: 'Heading text 1 for Product 8',
                  headingtext2: 'Heading text 2 for Product 8',
                  headingtext3: 'Heading text 3 for Product 8'
                },
                {
                  image: 'path/to/image9.jpg',
                  name: 'Product 9',
                  price: 9000,
                  description: 'Product 9 description',
                  heading1: 'Heading 1 for Product 9',
                  heading2: 'Heading 2 for Product 9',
                  heading3: 'Heading 3 for Product 9',
                  headingtext1: 'Heading text 1 for Product 9',
                  headingtext2: 'Heading text 2 for Product 9',
                  headingtext3: 'Heading text 3 for Product 9'
                },
                {
                  image: 'path/to/image10.jpg',
                  name: 'Product 10',
                  price: 10000,
                  description: 'Product 10 description',
                  heading1: 'Heading 1 for Product 10',
                  heading2: 'Heading 2 for Product 10',
                  heading3: 'Heading 3 for Product 10',
                  headingtext1: 'Heading text 1 for Product 10',
                  headingtext2: 'Heading text 2 for Product 10',
                  headingtext3: 'Heading text 3 for Product 10'
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