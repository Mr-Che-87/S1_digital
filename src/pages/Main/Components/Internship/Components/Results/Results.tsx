import { ResultsList, ResultsText, ResultsTitle } from "./styles";

 
const Results = () => {
    return ( <ResultsList>
        <ResultsTitle>Портфолио</ResultsTitle>
        <ResultsText>Портфолио с реальными боевыми проектами в которых вы участвовали во время прохождения стажировки</ResultsText>
        <ResultsTitle>Сертификат</ResultsTitle>
        <ResultsText>Сертификат о прохождении стажировки</ResultsText>
        <ResultsTitle>Рекомендации</ResultsTitle>
        <ResultsText>Рекомендации от руководителей digit-агентства (документ характеристики с рекомендацией от директора digital-агентства с синими печатями)</ResultsText>
        <ResultsTitle>Устная рекомендация</ResultsTitle>
        <ResultsText>Возможность получить устную рекомендацию будущему работодателю при трудоустройстве на работу .</ResultsText>
    </ResultsList> );
}
 
export default Results;