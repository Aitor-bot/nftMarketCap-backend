import { LogService } from "../services/LogService/LogService";
import { LogType } from "../services/LogService/LogTypeEnum";
const collectionModel = require('../models/collectionsModel');
const collectionsStatsModel = require('../models/collectionsStatsModel');
const _logService: LogService = new LogService();

exports.getAllCollections = async () => {
    let allCollections = null;
    try {
        allCollections = await collectionModel.find();
    } catch (error) {
        _logService.log("Error de BBDD, en getAllCollections. ERROR: " + error, LogType.Error);
    }

    return allCollections;
}

exports.getAllActiveCollections = async () => {
    let allActiveCollections = null;
    try {
        allActiveCollections =  await collectionModel.find({Expired: false})
    } catch (error) {
        _logService.log("Error de BBDD, en getAllActiveCollections. ERROR: " + error, LogType.Error);
    }

    return allActiveCollections;
}

exports.getCollectionsStatsWithVolumenGraterT100 = async () => {
    let collectionsStats = null;
    try {
        collectionsStats =  await collectionsStatsModel.find({ VolumenAll: { $gt: 100 }})
    } catch (error) {
        _logService.log("Error de BBDD, en getCollectionsStatsWithVolumenGraterT10. ERROR: " + error, LogType.Error);
    }

    return collectionsStats;
}


exports.getAllCollectionsStats = async () => {
    let allCollectionsStats = null;
    try {
        allCollectionsStats = await collectionsStatsModel.find();
    } catch (error) {
        _logService.log("Error de BBDD, en getAllCollectionsStats. ERROR: " + error, LogType.Error);
    }

    return allCollectionsStats;
}

exports.saveNewCollection = async (newCollection: any) => {
    try {
        await newCollection.save();
    } catch (error) {
        _logService.log("Error de BBDD, en saveNewCollection. ERROR: " + error, LogType.Error);
    }
}

exports.saveNewCollectionStats = async (newCollectionStats: any) => {
    try {
        await newCollectionStats.save();
    } catch (error) {
        _logService.log("Error de BBDD, en saveNewCollectionStats. ERROR: " + error, LogType.Error);
    }
}

exports.updateOneCollectionStatsVolumenAll = async (newCollectionStats: any) => {
    try {
        await newCollectionStats.updateOne({'Symbol': newCollectionStats.Symbol},{$set:{'VolumenAll': newCollectionStats.VolumenAll}})
    } catch (error) {
        _logService.log("Error de BBDD, en updateOneCollectionStatsVolumenAll. ERROR: " + error, LogType.Error);
    }
}