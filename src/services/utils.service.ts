import { DateTime } from 'luxon'
import { toast } from 'sonner'

/*
|--------------------------------------------------------------------------
| Utils
|--------------------------------------------------------------------------
*/
export class Utils {
	// Date
	// ---------------------------------------------------------------------------
	static formatDate(date: string | null | undefined): string {
		if (!date) return ''
		return DateTime.fromISO(date).toFormat('dd/MM/yyyy')
	}

	// Object
	// ---------------------------------------------------------------------------
	static removeNullUndefined(obj: Record<string, any>): Record<string, any> {
		return Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== null && value !== undefined))
	}

	// Clipboard
	// ---------------------------------------------------------------------------
	static copyToClipboard(text: string): void {
		if (!navigator.clipboard) {
			toast.error('Erreur lors de la copie dans le presse-papiers')
			return
		}
		navigator.clipboard.writeText(text).then(
			() => {
				toast.success('Copié dans le presse-papiers')
			},
			() => {
				toast.error('Erreur lors de la copie dans le presse-papiers')
			},
		)
	}

	// Avatar
	// ---------------------------------------------------------------------------
	static stringToColor(string: string): string {
		let hash = 0
		let i

		for (i = 0; i < string.length; i += 1) {
			hash = string.charCodeAt(i) + ((hash << 5) - hash)
		}

		let color = '#'

		for (i = 0; i < 3; i += 1) {
			const value = (hash >> (i * 8)) & 0xff
			color += `00${value.toString(16)}`.slice(-2)
		}

		return color
	}

	static stringAvatar(name: string) {
		return {
			sx: {
				bgcolor: this.stringToColor(name),
			},
			children: this.getInitials(name),
		}
	}

	static getInitials(name: string): string {
		return name
			.split(' ')
			.slice(0, 2)
			.map((word) => word[0])
			.join('')
	}

	/**
	 * Transform an object to a Query String for URL.
	 *
	 * @param obj - The object to transform.
	 * @returns The generated Query String.
	 */
	static objectToQueryString(obj: Record<string, any>): string {
		const params = new URLSearchParams()
		for (const key in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				const value = obj[key]
				if (value !== null && value !== undefined) {
					params.append(key, String(value))
				}
			}
		}
		return params.toString()
	}
}
