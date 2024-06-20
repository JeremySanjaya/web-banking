import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Jeremy'}
  return (
      <section className='home'>
          <div className='home-content'>
              <header className='home-header'>
                  <HeaderBox
                      type="greeting"
                      title="Welcome"
                      user={loggedIn?.firstName || 'Guest'}
                      subtext="Acces and manage your account and transactions efficiently."
                  />

                  <TotalBalanceBox
                      accounts={[]}
                      totalBanks={1}
                      totalCurrentBalance={1250.35}
                  />
              </header>
          </div>
      </section>
  )
}

export default Home