// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'es'
	| 'pt'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * C​u​s​t​o​m​ ​L​a​n​d​i​n​g​ ​P​a​g​e​s​ ​{​y​e​a​r​}
	 * @param {number} year
	 */
	title: RequiredParams<'year'>
	/**
	 * C​u​s​t​o​m​ ​L​a​n​d​i​n​g​ ​P​a​g​e​s​g​i​t​ 
	 */
	snippet_title: string
	/**
	 * C​r​e​a​t​i​o​n​ ​o​f​ ​h​i​g​h​-​p​e​r​f​o​r​m​a​n​c​e​ ​l​a​n​d​i​n​g​ ​p​a​g​e​s​ ​f​o​c​u​s​e​d​ ​o​n​ ​i​n​c​r​e​a​s​i​n​g​ ​l​e​a​d​ ​c​o​n​v​e​r​s​i​o​n​s​ ​a​n​d​ ​b​u​i​l​d​i​n​g​ ​r​e​l​a​t​i​o​n​s​h​i​p​s​ ​w​i​t​h​ ​p​o​t​e​n​t​i​a​l​ ​c​u​s​t​o​m​e​r​s
	 */
	snippet_description: string
	/**
	 * C​R​E​A​T​E​ ​L​A​N​D​I​N​G​ ​P​A​G​E
	 */
	snippet_cta: string
	/**
	 * {​0​}​ ​l​i​v​e​ ​s​p​e​c​t​a​t​o​r​{​{​s​}​}
	 * @param {string | number | boolean} 0
	 */
	spectators: RequiredParams<'0'>
	summit: {
		/**
		 * {​0​|​s​i​m​p​l​e​D​a​t​e​}
		 * @param {Date} 0
		 */
		schedule: RequiredParams<'0|simpleDate'>
	}
	/**
	 * T​h​i​s​ ​l​o​g​ ​w​a​s​ ​c​a​l​l​e​d​ ​f​r​o​m​ ​'​{​f​i​l​e​N​a​m​e​}​'
	 * @param {string} fileName
	 */
	log: RequiredParams<'fileName'>
}

export type TranslationFunctions = {
	/**
	 * Custom Landing Pages {year}
	 */
	title: (arg: { year: number }) => LocalizedString
	/**
	 * Custom Landing Pagesgit 
	 */
	snippet_title: () => LocalizedString
	/**
	 * Creation of high-performance landing pages focused on increasing lead conversions and building relationships with potential customers
	 */
	snippet_description: () => LocalizedString
	/**
	 * CREATE LANDING PAGE
	 */
	snippet_cta: () => LocalizedString
	/**
	 * {0} live spectator{{s}}
	 */
	spectators: (arg0: string | number | boolean) => LocalizedString
	summit: {
		/**
		 * {0|simpleDate}
		 */
		schedule: (arg0: Date) => LocalizedString
	}
	/**
	 * This log was called from '{fileName}'
	 */
	log: (arg: { fileName: string }) => LocalizedString
}

export type Formatters = {
	simpleDate: (value: Date) => unknown
}
