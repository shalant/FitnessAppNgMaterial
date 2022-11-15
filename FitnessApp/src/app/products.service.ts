export class ProductsService {
    private products = ['A Book'];

    addProduct(productName: string) {
        this.products.push(productName);
    }

    getProducts() {
        return [...this.products];
    }
}