//Priority: 9999

function ShapedRecipe(item, quantity, shape, ingredients){
    this.item = item;
    this.quantity = quantity;
    this.shape = shape;
    this.ingredients = ingredients;
}

function ShapelessRecipe(item, count, ingredients){
    this.item = item;
    this.count = count;
    this.ingredients = ingredients;
}
