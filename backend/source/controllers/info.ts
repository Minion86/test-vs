import { Request, Response, NextFunction } from 'express';


const getPrice = async (req: Request, res: Response, next: NextFunction) => {
    let type = req.params.type;
    let discount = req.params.discount
    let price: number = 0;
    switch (type) {
        case 'wallet': { price = 1; break; }
        case 'desk': { price = 3; break; }
        case 'poster': { price = 8; break; }
    }

    let percentage=Number.parseFloat(discount);
    let result: number = price-(price * (percentage / 100));
    let data = result;
    return res.status(200).json({
        message: data
    });
};


export default { getPrice };


