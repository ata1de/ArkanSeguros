import { SectionCardDashboardProps } from "@/types/dashboard";
import { TabsContent } from "../ui/tabs";
import CardsDashboard from "./CardsDashboard";
import PieCharts from "./PieChart";
import TinyChart from "./TinyChart";

function SectionCardDashboard ({
    accuracyRate,
    peopleTypeManager,
    clientManager,
    dataUserByMonth,
    dataServices,
    progressClients,
    isLoadingClientManager,
    isLoadingAccurate,
    isLoadingPeopleManager,
    isRefetchingAccurate,
    isLoadingProgressStatus,
    isRefetchingProgressStatus,
    isLoadingUserByMonth,
    isLoadingServices,
}: SectionCardDashboardProps) {
    return (
        <TabsContent value='home'>
            <div className='flex flex-col gap-5 w-full p-5'>
              <h1 className='text-3xl font-semibold'>Dashboard</h1>
              <div>
                <CardsDashboard accuracyRate={accuracyRate!} peopleTypeManager={peopleTypeManager!} clientManager={clientManager!}  isLoadingClientManager={isLoadingClientManager} isLoadingAccurate={isLoadingAccurate} isLoadingPeopleManager={isLoadingPeopleManager} isRefetchingAccurate={isRefetchingAccurate} isLoadingProgressStatus={isLoadingProgressStatus} isRefetchingProgressStatus={isRefetchingProgressStatus} progressClients={progressClients!}/>
              </div>
              <div className='flex max-[1301px]:flex-col items-center justify-center gap-3 w-full mt-8 mb-12'>
                <div className='w-[65%] max-[1301px]:w-full h-[370px] flex flex-col items-start justify-center p-5 border border-gray-600 rounded-md'>
                  <p className='text-xl font-medium py-3'>Usuários/mês</p>
                  <TinyChart data={dataUserByMonth!} isLoading={isLoadingUserByMonth} />
                </div>
                <div className='w-[35%] max-[1301px]:w-full h-[370px] flex flex-col items-start justify-center p-5 border border-gray-600 rounded-md'>
                  <p className='text-xl font-medium py-3'>Serviço/usuário</p>
                  <PieCharts data={dataServices!} isLoading={isLoadingServices} />
                </div>
              </div>
            </div>
          </TabsContent>
    )
}

export default SectionCardDashboard;