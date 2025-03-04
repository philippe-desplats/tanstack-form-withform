import { configNext } from '@dirupt/eslint-config'

export default configNext({
    rules: {
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        'react/no-children-prop': 'off',
    }
})
