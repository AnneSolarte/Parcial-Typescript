export async function traer_categories() {
    try{
        const categories = await fetch("https://api.chucknorris.io/jokes/categories").then(res =>
        res.json())

        return categories
    }
    catch (error){
        console.log(error)
    }

}

export async function traer_jokes(name: any) {
    try{
        const categories = await fetch("https://api.chucknorris.io/jokes/random?category={" + name + "}").then(res =>
        res.json())

        return categories
    }
    catch (error){
        console.log(error)
    }

}
