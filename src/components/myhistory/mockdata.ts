const MockData = [
  {
    displayIndex: 1,
    writerId: 1,
    userId: 1,
    deletedAt: null,
    frequency: 'DAILY',
    description: '첫번째 업무를 합시다',
    name: '콘트라 베이스 연습하기',
    recurringId: 1,
    doneAt: '2024-10-12T04:49:32.544Z',
    date: '2024-10-12T03:49:32.544Z',
    updatedAt: '2024-10-12T03:51:32.544Z',
    id: 1,
  },
  {
    displayIndex: 2,
    writerId: 2,
    userId: 2,
    deletedAt: null,
    frequency: 'DAILY',
    description: '두번째 업무를 합시다',
    name: '개발 공부하기',
    recurringId: 1,
    doneAt: '2024-10-12T04:45:32.544Z',
    date: '2024-10-12T02:49:32.544Z',
    updatedAt: '2024-10-12T01:49:32.544Z',
    id: 2,
  },
  {
    displayIndex: 3,
    writerId: 3,
    userId: 3,
    deletedAt: null,
    frequency: 'DAILY',
    description: '세번째 업무를 합시다',
    name: '스키장 가기',
    recurringId: 1,
    doneAt: '2024-10-13T04:45:32.544Z',
    date: '2024-10-12T02:49:32.544Z',
    updatedAt: '2024-10-12T01:49:32.544Z',
    id: 3,
  },
  {
    displayIndex: 4,
    writerId: 4,
    userId: 4,
    deletedAt: null,
    frequency: 'DAILY',
    description: '네번째 업무를 합시다',
    name: 'axios 적용하기',
    recurringId: 1,
    doneAt: '2024-10-14T04:45:32.544Z',
    date: '2024-10-12T02:49:32.544Z',
    updatedAt: '2024-10-12T01:49:32.544Z',
    id: 4,
  },
  {
    displayIndex: 5,
    writerId: 5,
    userId: 5,
    deletedAt: null,
    frequency: 'DAILY',
    description: '다섯번째 업무를 합시다',
    name: '공부하기 싫어!!',
    recurringId: 1,
    doneAt: '2024-10-11T04:45:32.544Z',
    date: '2024-10-09T02:49:32.544Z',
    updatedAt: '2024-10-09T01:49:32.544Z',
    id: 5,
  },
  {
    displayIndex: 6,
    writerId: 6,
    userId: 6,
    deletedAt: null,
    frequency: 'DAILY',
    description: '여섯번째 업무를 합시다',
    name: '충주에서 살아남기',
    recurringId: 1,
    doneAt: '2024-10-08T04:45:32.544Z',
    date: '2024-10-01T02:49:32.544Z',
    updatedAt: '2024-10-01T01:49:32.544Z',
    id: 6,
  },
];

export default MockData;

// - displayIndex : 작업의 표시 순서를 나타낸다. 리스트에서 작업의 순서를 정렬할 때 사용
// - writerId : 작업을 작성한 사람의 ID
// - userId : 이작업을 완료한 사용자의 ID
// - deletedAt :  작업이 삭제된 시간?
// - frequency : 작업의 반복주기, DAILY? → 매일 반복되는 작업임을 의미함
// - description : 작업에 대한 설명, 세부 내용
// - name : 작업의 이름, 제목
// - recurringId : 반복 작업의 그룹을 식별할 수 있는 ID, 특정 반복 작업 세트를 그룹화 할때 사용
// - doneAt : 작업이 완료된 시간
// - date : 작업의 날짜, 작업이 기록된 시간
// - updateAt : 마지막 수정 시간
// - id : 고유 ID

// recurringId
// 반복작업 일때 1
// 반복잡업이 아닐때 2
