import React, { useState } from 'react'
import Head from '../../Components/Header/Head'
import Vediop from '../../Components/VedioPlayer/VedioP'
import Stay from '../../Components/Stay/section/Stay'
import Things from '../../Components/Things/section/Things'
import Know from '../../Components/Know/Know'
import Planning from '../../Components/Planning/Planning'
import Inspired from '../../Components/Inspired/section/Inspired'
import Foot from '../../Components/Footer/Foot'
import HiddenMeanu from '../../Components/Header/HiddenMeanu'
import Where from '../../Components/Where/section/Where'
const Home = () => {
const [stat,useStat] = useState(false);

  return (
<>
<Head funx={useStat} state={stat} />
<div className={`fixed top-[5rem] md:hidden ${stat==true?"sm:block":"hidden"}`} style={{zIndex:'11111' }}>

<HiddenMeanu/>
</div>
<Vediop/>
<Stay/>
<Things/>
<Know/>
<Planning/>
<Inspired/>
<Where/>
<Foot/>
</>
  )
}

export default Home