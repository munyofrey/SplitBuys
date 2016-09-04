export const sumConstants = {
  REQUEST_SUMS: 'REQUEST_SUMS',
  RECEIVE_SUMS: 'RECEIVE_SUMS'
}



export const requestSums = () => ({
  type: sumConstants.REQUEST_SUMS
})

export const receiveSums = (sums) => ({
  type: sumConstants.RECEIVE_SUMS,
  sums,
})
