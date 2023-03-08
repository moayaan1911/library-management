const {expect} = require('chai');
const {ethers} = require('hardhat');

describe('Library', function(){
    let library;
    let owner, addr1, addr2;
    beforeEach(async function(){
        [owner, addr1, addr2] = await ethers.getSigners();
        const Library = await ethers.getContractFactory('Library');
        library = await Library.deploy();
        await library.deployed();
    });


    it("should emit Add Book event", async function(){
        await expect(library.addBook("Book1", "Author1", 100,false))
        .to.emit(library, 'AddBook')
        .withArgs(owner.address,0);
    })

    it("should fetch unfinished books", async function(){
        await library.addBook("Book1", "Author1", 100,false);
        await library.addBook("Book2", "Author2", 200,false);
        await library.addBook("Book3", "Author3", 300,false);
        await library.addBook("Book4", "Author4", 400,true);
        const books = await library.getUnfinishedBooks();
        expect(books.length).to.equal(3);
    })

    it("should fetch finished books", async function(){
        await library.addBook("Book1", "Author1", 100,false);
        await library.addBook("Book2", "Author2", 200,false);
        await library.addBook("Book3", "Author3", 300,false);
        await library.addBook("Book4", "Author4", 400,true);
        const books = await library.getFinishedBooks();
        expect(books.length).to.equal(1);
    })

    it("should change finish status", async function(){
        await library.addBook("Book1", "Author1", 100,false);
        await library.setFinished(0,true);
        const books = await library.getFinishedBooks();
        expect(books.length).to.equal(1);
        
    })



} )