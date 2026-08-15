export interface ICreateTopicsSubscriptions {
  topic: {
    created: boolean
    topic_id: string
  }
  subscription: {
    created: boolean
    subscription_id: string
  }
}
