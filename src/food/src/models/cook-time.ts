export const getCookTime = (time: number) => cookTimes.find(x => x.id === time)?.value;

export const cookTimes: { id: number, value: string }[] = [{
    id: 5,
    value: '5 minutes'
}, {
    id: 10,
    value: '10 minutes'
}, {
    id: 15,
    value: '15 minutes'
}, {
    id: 20,
    value: '20 minutes'
}, {
    id: 30,
    value: '30 minutes'
}, {
    id: 45,
    value: '45 minutes'
}, {
    id: 60,
    value: '1 hour'
}, {
    id: 90,
    value: '1 hour 30 minutes'
}, {
    id: 120,
    value: '2 hours'
}, {
    id: 150,
    value: '2 hours 30 minutes'
}, {
    id: 180,
    value: '3 hours'
}]
