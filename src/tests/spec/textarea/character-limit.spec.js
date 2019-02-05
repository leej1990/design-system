import { awaitPolyfills } from 'js/polyfills/await-polyfills';
import template from 'components/textarea/src/_template.njk';
import charLimit from 'components/textarea/src/character-limit';

const params = {
  id: 'textarea-char-limit',
  name: 'feedback-limmited',
  classes: 'input--w-30',
  label: {
    text: 'Please provide some feedback',
    description: 'For example describe any difficulties you experienced in the use of this service'
  },
  maxlength: 200,
  charCountSingular: 'You have {x} character remaining',
  charCountPlural: 'You have {x} characters remaining'
};

describe('Component: Textarea with character limit', () => {
  let wrapper, textarea, limit_readout;

  before(() => {
    return awaitPolyfills;
  });

  beforeEach(() => {
    const html = template.render({ params });

    wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    document.body.appendChild(wrapper);

    textarea = document.getElementById(params.id);
    limit_readout = document.getElementById(`${params.id}-lim-remaining`);

    charLimit();
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.remove();
    }
  });

  describe('Given that the char limit helper has initialised correctly', () => {
    it('the char limit readout should be visible', () => {
      expect(limit_readout.classList.contains('u-d-no')).to.equal(false);
    });
  });

  describe('Given that the user has not typed into the textarea', () => {
    describe('when the user types into the textarea', () => {
      const value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nMorbi rhoncus varius mauris, vitae venenatis.';
      beforeEach(() => {
        populateTextarea(textarea, value);
      });

      it('then the characters remaining readout reflect the number of characters remaining', () => {
        expect(limit_readout.innerHTML).to.equal(params.charCountPlural.replace('{x}', params.maxlength - value.length));
      });
    });

    describe('when the user reaches/exceeds the maxlength of the textarea', () => {
      let value = '';

      for (let i = 0; i < params.maxlength; i++) {
        value += '.';
      }

      beforeEach(() => {
        populateTextarea(textarea, value);
      });

      it('then the characters remaining readout reflect the number of characters remaining', () => {
        expect(limit_readout.innerHTML).to.equal(params.charCountPlural.replace('{x}', 0));
      });

      it('then the textarea and readout should be given limit reached classes', () => {
        expect(textarea.classList.contains('input--limit-reached')).to.equal(true);
        expect(limit_readout.classList.contains('input__limit--reached')).to.equal(true);
      });
    });
  });

  describe('Given that the user has reached/exceeded the maxlength of the textarea', () => {
    let value = '';

    for (let i = 0; i < params.maxlength; i++) {
      value += '.';
    }

    beforeEach(() => {
      populateTextarea(textarea, value);
    });

    describe('when the user removes a character', () => {
      beforeEach(() => {
        populateTextarea(textarea, textarea.value.slice(1));
      });

      it('then the characters remaining readout reflect the number of characters remaining', () => {
        expect(limit_readout.innerHTML).to.equal(params.charCountSingular.replace('{x}', 1));
      });

      it('then the textarea and readout should be given limit reached classes', () => {
        expect(textarea.classList.contains('input--limit-reached')).to.equal(false);
        expect(limit_readout.classList.contains('input__limit--reached')).to.equal(false);
      });
    });
  });
});

export function populateTextarea(
  textarea,
  value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus varius mauris, vitae venenatis sem ullamcorper in. Integer eu facilisis urna. Sed convallis porttitor massa eu pulvinar.'
) {
  textarea.value = value;
  const event = new CustomEvent('input');
  textarea.dispatchEvent(event);
}