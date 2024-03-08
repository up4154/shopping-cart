export class Product{
    product_id:number
    product_name:string
    product_img_url:string
    product_price:number
    product_quantity:number

    constructor(product_id: number,product_name: string,product_img_url: string,product_price: number){
       this.product_id=product_id
       this.product_name=product_name
        this.product_img_url=product_img_url
        this.product_price=product_price
    }

}