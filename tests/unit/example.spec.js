import { mount } from '@vue/test-utils'
import MyComponent from '@/components/MyComponent.vue'

describe('MyComponent.vue', () => {
  it('calls createDimension on save button-click', async() => {
    const createDimension = jest.fn(() => Promise.resolve())

    const wrapper = mount(MyComponent, {
      mocks: {
        $qiwaApi: {
          createDimension
        }
      }
    })

    const saveButton = wrapper.find('[data-testid="save"]')
    await saveButton.trigger('click')

    expect(createDimension).toHaveBeenCalled()
  })
})
