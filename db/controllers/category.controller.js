const Category = require('../models/category.model');

// Créer une nouvelle catégorie
exports.createCategory = async (req, res) => {
    try {
        const newCategory = new Category({ name: req.body.name });
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lire toutes les catégories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour une catégorie
exports.updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        if (!updatedCategory) return res.status(404).json({ message: "Catégorie non trouvée" });
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer une catégorie
exports.deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) return res.status(404).json({ message: "Catégorie non trouvée" });
        res.status(200).json({ message: "Catégorie supprimée" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
