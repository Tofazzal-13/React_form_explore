import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name="Roton" asset={asset}></Cousin>
                <Cousin name="Robin"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;