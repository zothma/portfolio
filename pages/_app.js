import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log(Component.getLayout)
  const CustomLayout = Component.getLayout ?? (({children}) => children)

  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  );
}

export default MyApp
