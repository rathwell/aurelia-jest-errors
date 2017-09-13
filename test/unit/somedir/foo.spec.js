// import { Foo } from '../../../src/somedir/foo';
import { StageComponent, waitFor, waitForDocumentElement } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';

describe('foo component', () => {
    let component;

    beforeEach(() => {
        component = StageComponent
            .withResources('../../src/somedir/foo')
            .inView('<foo></foo>');
    });

    afterEach(() => {
        component.dispose();
    });

    it('should behave correctly on first render', done => {
        component.manuallyHandleLifecycle().create(bootstrap)
            .then(() => waitForDocumentElement('foo'))
            .then(() => {
                expect(component.viewModel.message).toEqual('constructed');
                return component.viewModel.activate({ message: 'intest' });
            })
            .then(() => {
                expect(component.viewModel.message).toEqual('activate:intest');
                return component.bind();
            })
            .then(() => component.attached())
            .then(() => {
                expect(component.viewModel.message).toEqual('attached');
                return done();
            });
    });
});
