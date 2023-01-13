import SHOPDATA from '../../shop-data.json';

const Shop = () => {
    return (
        <div>
            {SHOPDATA.map(({ id, name }) => (
                <div key={id}>
                    <h1>{name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Shop;