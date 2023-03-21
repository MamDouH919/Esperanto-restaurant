import Card from 'react-bootstrap/Card';
import FirstBranchImg from '../img/branch.webp';
import SecondBranchImg from '../img/Branch2.webp';
import ThistBranchImg from '../img/Branch3.webp';
import AnimationPage from './animation';

function OurBranches() {

    return (
        <AnimationPage>
            <div className='justify-content-center d-flex branch-content branch-content'>
                <Card style={{ width: '60%' }}>
                    <Card.Img variant="top mb-5" src={FirstBranchImg} />
                    <Card.Img variant="top mb-5" src={SecondBranchImg} />
                    <Card.Img variant="top" src={ThistBranchImg} />
                    <Card.Body className='align-items-center d-flex flex-column'>
                        <Card.Title style={{ fontSize: 80 }} className='special-color special-font'>Heliopolis</Card.Title>
                        <Card.Text className='text-white fs-2'>
                            Merryland - Heliopolis - Cairo
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </AnimationPage>
    );
}

export default OurBranches;