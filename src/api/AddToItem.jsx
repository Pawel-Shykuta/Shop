const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
    const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY;

async function addTestProduct() {
        const product = {
            name: "Кресло Комфорт",
            price: 120.5,
            image: "https://example.com/chair.jpg",
            description: "Удобное кресло для гостиной",
            category: "Мебель",
        };

        const response = await fetch(`${SUPABASE_URL}/rest/v1/products`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Prefer': 'return=representation'
            },
            body: JSON.stringify(product),
        });

        if (!response.ok) {
            const error = await response.text();
            console.error("Ошибка добавления товара:", error);
            return;
        }

        const addedProduct = await response.json();
        console.log("Товар добавлен:", addedProduct);
}

