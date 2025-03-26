interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A Moontok Listing',
    description: `Fastest way to list & trend your token on Chinese Platform! 
    Increased Visibility: Higher votes make your content more noticeable.
    Enhanced Credibility: Boost your account’s trustworthiness.
    More Engagement: Higher votes often lead to more interactions and followers..`,
    imgSrc: '/static/images/google.png',
    href: 'https://moontok.io/coins/brucy',
  },
  {
    title: 'BRUCY Token Lock',
    description: `Token lockup is a crucial mechanism in the cryptocurrency space that provides stability, 
    commitment, and trust among token holders. By restricting the sale of large amounts of tokens, 
    the risk of price volatility due to overselling is mitigated.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://app.streamflow.finance/contract/solana/mainnet/6x39HH5yamckrK9QKVRCKnyqeKASxXba4DszkrCoLtn9',
  },
]

export default projectsData
