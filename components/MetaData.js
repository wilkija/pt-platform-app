import Head from "next/head";

const MetaData = ({ title }) => {
    return ( 
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="Providing comprehensive services to help trainers help clients be well."
                />
                <meta
                    name="keywords"
                    content="personal, trainer, exercise, fitness, health"
                />
                <title>{title}</title>
            </Head>
        </div>
     );
}
 
export default MetaData;