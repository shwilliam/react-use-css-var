import {useCallback} from 'react'
import {TGetter, TSetter} from './useCssVar.d'

/**
 * Custom hook to interface with CSS custom properties.
 *
 * ```js
 * const [get, set] = useCssVar('--color-bg')
 *
 * get() // 'papayawhip'
 *
 * set('rebeccapurple')
 * ```
 *
 * @param propertyName  Name of CSS property.
 * @param element       DOM element on which the CSS property will be looked up/set on.
 * @returns             Tuple with a getter and setter.
 */

export const useCssVar = (
  propertyName: string,
  element = document.documentElement,
): [TGetter, TSetter] | undefined => {
  if (!window.hasOwnProperty('getComputedStyle')) return

  const get: TGetter = useCallback(
    () => getComputedStyle(element).getPropertyValue(propertyName),
    [],
  )
  const set: TSetter = useCallback(
    (value: string) => element.style.setProperty(propertyName, value),
    [],
  )

  return [get, set]
}
