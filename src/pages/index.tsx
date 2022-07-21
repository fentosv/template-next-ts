import type { NextPage } from 'next'
import Head from 'next/head'

import Button from '@components/Button'
import Layout from '@components/Layout'
import Section from '@components/Section'

const Home: NextPage = () => {
  return (
    <Layout>

      <Head>
        <title>Fentos | NextJS & TypeScript</title>
        <meta name="description" content="Fentos' project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section test={false}>
        <Button
          text='Click me!'
          displayName='Fentos'
          arrayNum={[1, 2, 3, 4]}
          name='button_1'
          mode='rounded'
        // disabled={true}
        />
      </Section>

      <Section width='full' test={true}>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatum, fugit nisi quam officia cum minus error provident quisquam debitis. Ratione fugit rem a nemo sed beatae nisi, iusto maiores!</div>
      </Section>

    </Layout>
  )
}

export default Home
