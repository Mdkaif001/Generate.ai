import Heading from '@/components/heading'
import SubscriptionButton from '@/components/subscription-button'
import { checkSubscription } from '@/lib/subscriprion'
import { Settings } from 'lucide-react'
import React from 'react'

const SettingPage = async() => {
  const isPro = await checkSubscription();
  return (
    <>
      <Heading title='Settings' description='Manage your account' icon={Settings} iconColor='text-gray-700' bgColor='bg-gray-700/10'/>
      <div className="px-4 lg:px-8 space-y-4 ">
        <div className="text-muted-foreground text-sm">
          {isPro ? "You are currently on pro plan.":"You are currently on free plan"}
        </div>
        <SubscriptionButton isPro={isPro}/>
      </div>
    </>
  )
}

export default SettingPage
