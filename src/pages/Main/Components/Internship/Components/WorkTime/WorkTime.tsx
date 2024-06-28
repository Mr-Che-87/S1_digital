import { WorkTimeBlock, WorkTimeSubTitle, WorkTimeText, WorkTimeTitle } from "./styles";

 
const WorkTime = () => {
    return ( <WorkTimeBlock>
        <WorkTimeTitle>Рабочее время — 4 часа в день.</WorkTimeTitle>
            <WorkTimeText>
              Минимальное время, которое должно уделяться стажировке — 4 часа в
              день. Стажировку можно совмещать с работой, учебой, посменным
              графиком. Главное вовремя и полностью выполнять задания.
            </WorkTimeText>
            <WorkTimeSubTitle>Наставник</WorkTimeSubTitle>
            <WorkTimeText>
              На время стажировки у вас будет наставник из числа руководителей
              по выбранной специализации, который будет помогать вам приобрести
              необходимый практический опыт.
            </WorkTimeText>
            <WorkTimeSubTitle>Обучение</WorkTimeSubTitle>
            <WorkTimeText>
              На стажировке вы получите возможность отработать свои знания
              на реальных проектах. Те, кто не справляются — будут вынуждены
              прекратить стажировку. Это может произойти в любой момент,
              достаточно выполнить задание с задержкой, не предупредив об этом
              наставника, перестать выходить на связь или выдавать
              поверхностные(для галочки) результаты.
            </WorkTimeText>
    </WorkTimeBlock> );
}
 
export default WorkTime;