import type { IUseGetTopics } from '../hooks/useGetTopics'
import type { IUseGetSubscription } from '../hooks/useGetSubscriptions'

const TopicsSubscriptionsList = ({
  topics,
  subscriptions,
}: {
  topics: IUseGetTopics
  subscriptions: IUseGetSubscription
}) => {
  return (
    <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* TOPICS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Topics creados
        </h2>

        {topics.isLoading ? (
          <div className="flex justify-center py-10">
            <div className="h-6 w-6 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin" />
          </div>
        ) : topics.data && topics.data.length > 0 ? (
          <ul className="space-y-2 max-h-64 overflow-y-auto pr-2">
            {topics.data.map((item, index) => (
              <li
                key={index}
                className="bg-gray-50 hover:bg-gray-100 transition rounded-lg px-3 py-2 text-sm text-gray-700 flex items-start gap-2"
              >
                <span className="text-gray-400 min-w-6">{index + 1}.</span>
                <span className="truncate" title={item}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center text-gray-500 py-10 text-sm">
            No hay topics creados
          </div>
        )}
      </div>

      {/* SUBSCRIPTIONS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Subscriptions creadas
        </h2>

        {subscriptions.isLoading ? (
          <div className="flex justify-center py-10">
            <div className="h-6 w-6 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin" />
          </div>
        ) : subscriptions.data && subscriptions.data.length > 0 ? (
          <ul className="space-y-2 max-h-64 overflow-y-auto pr-2">
            {subscriptions.data.map((item, index) => (
              <li
                key={index}
                className="bg-gray-50 hover:bg-gray-100 transition rounded-lg px-3 py-2 text-sm text-gray-700 flex items-start gap-2"
              >
                <span className="text-gray-400 min-w-6">{index + 1}.</span>
                <span className="truncate" title={item}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center text-gray-500 py-10 text-sm">
            No hay subscriptions creadas
          </div>
        )}
      </div>
    </div>
  )
}

export default TopicsSubscriptionsList
