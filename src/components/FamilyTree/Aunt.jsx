import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name="Roton"></Cousin>
                <Cousin name="Robin"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;