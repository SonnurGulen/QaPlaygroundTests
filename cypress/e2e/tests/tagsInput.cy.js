import TagsInput from "../pages/tagsInput";


describe('Tags Input Box', () => {
    const tagsInput = new TagsInput();

    beforeEach(() => {
        new TagsInput().visit();
    });

    it('should add a tag correctly', () => {
        tagsInput
            .putInputCheck();
    });

    it('should add same tags correctly', () => {
        tagsInput
            .putInputCheck()
            .putInputCheck();
    });

    it('should remove tags correctly', () => {
        tagsInput
            .putInputCheck()
            .deleteAllInputs();
    });

    it('should try and fail to add a single characer', () => {
        tagsInput
            .addSingleChar();
    });

    it('should try and fail to add  empty space', () => {
        tagsInput
            .addEmptyChar();
    });

    it('should delete last tag', () => {
        tagsInput
            .putInputCheck()
            .deleteLastInput();
    });

    it('should delete all tags', () => {
        tagsInput
            .maxInputs()
            .deleteAllInputs();
    });

});