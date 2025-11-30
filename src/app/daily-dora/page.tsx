import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/common/Hero';
import Button from '@/components/common/Button';
import f3HeroImg from '@/../public/chicago.webp';
import en from '@/locales/en.json'

export default function Page() {
  const href = '/daily-dora';
  return (
    <>
      <Header href={href} />
      <main>
        <Hero
          title="DAILY DORA"
          subtitle="2026 ANNUAL PHYSICAL FITNESS PROGRAM"
          imgUrl={f3HeroImg.src}
        />
        <section className={`bg-gloom leading-tight py-16 px-4`}>
          <h2 className="text-5xl">WHAT IS DAILY DORA?</h2>
          <p className="text-cmu pt-5">
            Daily Dora is {en.region_name}&rsquo;s annual physical fitness program launching in 2026. 
            This is a structured, year-long challenge designed to build strength, consistency, and 
            community as we collectively work toward fitness goals.
          </p>
          <p className="text-cmu pt-5">
            Whether you&rsquo;re a regular at our AOs or new to the fitness journey, Daily Dora provides 
            a framework for progression and accountability throughout the year.
          </p>
        </section>

        <section className={`bg-iron leading-tight py-16 px-4`}>
          <h2>THE DAILY DORA 1-2-3 CHALLENGE</h2>
          <p className="text-cmu pt-5 text-white font-semibold">
            Starting January 1st, 2026, we&rsquo;re kicking off the Daily Dora 1-2-3 Challenge &ndash; 
            a year-long commitment to consistent fitness and accountability. This is about showing up 
            every single day and putting in the work, no matter where you are or what else is going on.
          </p>

          <h3 className="text-2xl pt-10 pb-3">The Challenge</h3>
          <p className="text-cmu">
            Every day in 2026, complete a Dora 1-2-3:
          </p>
          <ul className="list-none pl-0 text-cmu pt-3">
            <li>• 100 reps of Exercise 1</li>
            <li>• 200 reps of Exercise 2</li>
            <li>• 300 reps of Exercise 3</li>
          </ul>
          <p className="text-cmu pt-5">
            You can break up the reps however you want (10 rounds of 10-20-30, straight through, whatever works). 
            The goal is to accumulate the total reps each day.
          </p>

          <h3 className="text-2xl pt-10 pb-3">Recommended Exercise Combinations</h3>
          <ul className="w-full my-0">
            <li className="text-cmu pb-3">
              <strong>Classic:</strong> 100 Merkins, 200 Squats, 300 LBCs
            </li>
            <li className="text-cmu pb-3">
              <strong>Upper Body Focus:</strong> 100 Merkins, 200 Overhead Presses, 300 Curls
            </li>
            <li className="text-cmu pb-3">
              <strong>Leg Day:</strong> 100 Burpees, 200 Lunges (total), 300 Squats
            </li>
            <li className="text-cmu pb-3">
              <strong>Core Crusher:</strong> 100 Merkins, 200 Plank Jacks, 300 Flutter Kicks
            </li>
          </ul>
          <p className="text-cmu pt-5">
            You can rotate combinations or stick with one &ndash; your call. Just get it done.
          </p>

          <h3 className="text-2xl pt-10 pb-3">Tips for Success</h3>
          <ol className="list-decimal list-inside text-cmu space-y-3">
            <li><strong>Stack it with an existing habit</strong> – Do it right after your morning coffee or before your shower</li>
            <li><strong>Break it into chunks</strong> – 10 rounds of 10-20-30 is easier mentally than staring down 600 total reps</li>
            <li><strong>Recruit a partner</strong> – Text a PAX member when you&rsquo;re done each day for accountability</li>
            <li><strong>Don&rsquo;t break the chain</strong> – Mark an X on a calendar every day you complete it. The chain becomes motivation.</li>
            <li><strong>Plan for travel</strong> – Hotel room, airport terminal, rest stop – no excuses</li>
          </ol>

          <h3 className="text-2xl pt-10 pb-3">Recording Your Progress</h3>
          <p className="text-cmu pt-3">
            <strong>Post in our Slack channel:</strong>
          </p>
          <ul className="list-none pl-0 text-cmu pt-3">
            <li>• Daily check-ins (even just &quot;✓ Day 47 complete&quot;)</li>
            <li>• Weekly summaries with your combo and any wins/struggles</li>
            <li>• Monthly milestone celebrations (30 days, 60 days, etc.)</li>
          </ul>
          <p className="text-cmu pt-5">
            <strong>Personal tracking options:</strong>
          </p>
          <ul className="list-none pl-0 text-cmu pt-3">
            <li>• Use a simple calendar and mark each completed day</li>
            <li>• Track in a notes app or spreadsheet</li>
            <li>• Take a daily photo of yourself immediately after finishing</li>
          </ul>

          <h3 className="text-2xl pt-10 pb-3">Motivational Fuel</h3>
          <ul className="list-none pl-0 text-cmu italic space-y-2 pt-3">
            <li>&quot;The only bad workout is the one you didn&rsquo;t do.&quot;</li>
            <li>&quot;Discipline is choosing between what you want now and what you want most.&quot;</li>
            <li>&quot;You don&rsquo;t have to be great to start, but you have to start to be great.&quot;</li>
            <li>&quot;Success is the sum of small efforts repeated day in and day out.&quot;</li>
            <li>&quot;When you feel like quitting, remember why you started.&quot;</li>
          </ul>

          <h3 className="text-2xl pt-10 pb-3">The Bottom Line</h3>
          <p className="text-cmu pt-3">
            This is 365 days of showing up. Some days you&rsquo;ll crush it. Some days you&rsquo;ll grind through it. 
            But every day, you&rsquo;ll finish it. That&rsquo;s what separates the HIMs from the spectators.
          </p>
        </section>

        <section className={`bg-gloom leading-tight py-16 px-4`}>
          <h2>WHO CAN PARTICIPATE?</h2>
          <p className="text-cmu pt-5">
            Daily Dora is for every man in {en.region_name}. No matter your fitness level, age, or 
            experience with F3, you can participate. The beauty of F3 is that you control the difficulty&mdash;
            modify as needed to challenge yourself appropriately.
          </p>
          <p className="text-cmu pt-5">
            Our Q&rsquo;s will be familiar with Daily Dora and ready to help you understand the workouts and 
            how to scale them to your level. When you show up, let them know you want to participate in 
            Daily Dora and they&rsquo;ll guide you.
          </p>
        </section>

        <Footer />
      </main>
    </>
  );
}
