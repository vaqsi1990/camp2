import React from 'react'

import CategoriesList from '@/components/home/CategoriesList'
import PropertiesContainer from '@/components/home/PropertiesContainer'
import { Suspense } from 'react'
import LoadingCards from '@/components/card/LoadingCards'
function HomePage({searchParams}:{searchParams:{category?:string, search?:string}}) {
  console.log('es', process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  return (
   <section>
    <CategoriesList category={searchParams.category} search={searchParams.search} />
    <Suspense fallback={ < LoadingCards />} >
    <PropertiesContainer />
    </Suspense>
   </section>
  )
}

export default HomePage