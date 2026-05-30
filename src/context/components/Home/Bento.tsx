import BentoIcon from '../Icons/BentoIcon'
import WakatimeStats from './BentoCards/CodingTimeCard'
import GithubCard from './BentoCards/Githubcard'
import SocialsCard from './BentoCards/SocialsCard'
import StacksCard from './BentoCards/StacksCard'
import Chopstiks from './Chopstiks'

const Bento = () => {
  return (
    <div className="mt-16 space-y-10">
      <div className="group/bentoi flex w-fit items-baseline gap-2">
        <p className="font-neu text-2xl underline underline-offset-2">Bento</p>
        <BentoIcon className="w-8" />
        <Chopstiks className="w-8 -translate-x-8 -translate-y-1" />
      </div>
      <div className="hidden grid-cols-5 grid-rows-6 gap-4 xs:grid">
        <StacksCard isForSmall={true} />
        <GithubCard />
        <SocialsCard />
        <WakatimeStats />
      </div>

      <div className="grid grid-cols-5 grid-rows-5 gap-4 xs:hidden">
        <StacksCard />
        <GithubCard />
        <SocialsCard />
        <WakatimeStats />
      </div>
    </div>
  )
}
export default Bento
