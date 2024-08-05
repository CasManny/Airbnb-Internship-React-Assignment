import FooterCopyright from './FooterCopyright'
import FooterSupport from './FooterSupport'
import FooterTabs from './FooterTabs'

const Footer = () => {
  return (
    <div className='container bg-[#F7F7F7] P-5'>
      <FooterTabs />
      <FooterSupport />
      <FooterCopyright />
    </div>
  )
}

export default Footer