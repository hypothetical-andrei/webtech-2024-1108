export const INCREASE_COUNTER = 'INCREASE_COUNTER'

export function increaseCounter (v) {
  return {
    type: INCREASE_COUNTER,
    payload: v
  }
}