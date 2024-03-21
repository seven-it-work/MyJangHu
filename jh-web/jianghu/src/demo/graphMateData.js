export const edgeMateData = {
    connector: 'smooth',
    attrs: {
        line: {
            stroke: '#8f8f8f',
            strokeWidth: 1,
        },
    },
}
export const graphMateData = {
    shape: 'custom-vue-node',
    x: 100,
    y: 60,
    isNode: true,
    data: {
        componentKey: 'CORE_CHAT_DEFAULT',
        peopleObj: {},
        type: '',
        title: '',
        context: '',
        nextIdList: [],
    },
    ports: [
        {id: 'in-1', group: 'in'},
        {id: 'out-1', group: 'out'},
    ],
    tools: ['button-remove'],
}
